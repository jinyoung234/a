describe("메인 페이지 테스팅", () => {
  beforeEach(() => {
    cy.visit("../../index.html");
  });
  context("메뉴 추가 관련 테스팅", () => {
    it("에스프레소 메뉴판에 새로운 메뉴를 입력 후 확인 버튼을 눌러 추가할 수 있다.", () => {
      const addMenuName = "아메리카노";
      cy.get("#menu-name").type(addMenuName);
      cy.get("#menu-submit-button").click();
      cy.get("#menu-list li").contains(addMenuName).should("be.visible");
      cy.get(".menu-count").contains("총 1 개").should("be.visible");
    });
    it("에스프레소 메뉴판에 새로운 메뉴를 입력 후 엔터를 눌러 추가 할 수 있다.", () => {
      const addMenuName = "카페 라떼";
      cy.get("#menu-name").type(addMenuName).type("{enter}");
      cy.get("#menu-list li").contains(addMenuName).should("be.visible");
      cy.get(".menu-count").contains("총 1 개").should("be.visible");
    });
    it("메뉴가 추가되고 나면 input은 빈 값으로 초기화 된다.", () => {
      const addMenuName = "카페 라떼";
      cy.get("#menu-name").type(`${addMenuName}{enter}`);
      cy.get("#menu-name").should("have.value", "");
    });
    it("사용자 입력값이 빈 값이라면 추가되지 않는다.", () => {
      cy.registerLocalStorage();
      cy.get("#menu-name").then(($input) => {
        if ($input.text() === "") {
          cy.get("#menu-submit-button").click();
          cy.get("#menu-list li").should("have.length", 2);
        }
      });
    });
  });
  context("메뉴 수정 관련 테스팅", () => {
    it("등록 된 메뉴들에 대해 첫번째 메뉴 이름 수정이 가능해야 한다.", () => {
      cy.registerLocalStorage();
      cy.window().then(($win) => {
        cy.stub($win, "prompt").returns("카페 모카");
        cy.get("[data-menu-id='0'] .menu-edit-button").click();
      });
      cy.get("[data-menu-id='0'] .menu-name").contains("카페 모카");
    });
  });
  context("품절 상태 관련 테스팅", () => {
    it("등록 된 메뉴에 대해 품절 버튼을 누르면 해당 메뉴의 span 태그에 sold-out class가 적용되어 있어야 한다.", () => {
      cy.registerLocalStorage();
      cy.get("[data-menu-id='0'] .menu-sold-out-button").click();
      cy.get("[data-menu-id='0'] .menu-name").should("be.class", "sold-out");
    });
    it("품절 상태에서 다시 한번 더 클릭하면 품절 상태가 사라져야 한다.", () => {
      cy.registerLocalStorage();
      cy.get("[data-menu-id='0'] .menu-sold-out-button").click();
      cy.get("[data-menu-id='0'] .menu-name").should("be.class", "sold-out");
      cy.get("[data-menu-id='0'] .menu-sold-out-button").click();
      cy.get("[data-menu-id='0'] .menu-name").should("not.have.class", "sold-out");
    });
  });
  context("메뉴 삭제 관련 테스팅", () => {
    it("등록된 모든 메뉴들을 삭제 할 경우 메뉴 리스트에 아무 것도 없어야 하며 총 메뉴 갯수는 각각 1개, 0개 여야 한다.", () => {
      cy.registerLocalStorage();
      cy.get("[data-menu-id='0'] .menu-remove-button").click();
      cy.get(".menu-count").contains("총 1 개").should("be.visible");
      cy.get("[data-menu-id='0'] .menu-remove-button").click();
      cy.get(".menu-count").contains("총 0 개").should("be.visible");
      cy.get("#menu-list").should("be.empty");
    });
  });
  context("동작 관련 테스팅", () => {
    it("각 카테고리를 클릭 후 디저트 카테고리까지 클릭 되어있는 상태에서 리로딩을 하게 되면 에스프레소 메뉴판이 보여져야 한다.", () => {
      const menuCategorys = ["frappuccino", "blended", "teavana", "desert"];
      menuCategorys.forEach((category) => {
        cy.get(`[data-category-name=${category}]`).click();
      });
      cy.reload();
      cy.get("#category-title").contains("☕ 에스프레소 메뉴 관리").should("be.visible");
    });
    it("초기 렌더링 시 로컬 스토리지에 있는 데이터를 가져와 화면에 보여줄 수 있어야 한다.", () => {
      cy.registerLocalStorage();
      cy.reload();
    });
  });
});
