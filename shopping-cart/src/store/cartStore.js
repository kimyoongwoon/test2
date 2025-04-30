// src/store/cartStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

// 장바구니 상태를 관리하는 Zustand store 생성
const useCartStore = create(
  // persist 미들웨어를 사용하여 로컬 스토리지에 장바구니 데이터 유지
  persist(
    (set) => ({
      // 장바구니 아이템 목록
      items: [],

      // 장바구니에 상품 추가
      addItem: (product) =>
        set((state) => {
          // 이미 장바구니에 있는 상품인지 확인
          if (state.items.find((item) => item.id === product.id)) {
            return state; // 이미 있으면 상태 변경 없음
          }
          return { items: [...state.items, product] };
        }),

      // 장바구니에서 상품 제거
      removeItem: (product) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== product.id),
        })),

      // 장바구니 비우기
      clearCart: () => set({ items: [] }),

      // 장바구니에 특정 상품이 있는지 확인
      isInCart: (productId) => {
        // 이 메서드는 store 상태를 변경하지 않고 값만 반환하므로
        // 직접 구현하지 않고, 컴포넌트에서 store 값을 사용하여 확인
        return false; // 실제로는 컴포넌트에서 items.some(item => item.id === productId) 형태로 사용
      },
    }),
    {
      name: "cart-storage", // 로컬 스토리지에 저장될 키 이름
      getStorage: () => localStorage, // 스토리지 타입 설정
    }
  )
);

export default useCartStore;
