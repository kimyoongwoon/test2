import React from "react";
import styled from "@emotion/styled";
import { GNB } from "components/GNB";
import { GNB_TYPE } from "constants/common";
import { ProductInCart } from "components/ProductInCart";
import { Box } from "styles/StyleComponent";
import useCartStore from "../store/cartStore";

function CartPage() {
  // Zustand store에서 장바구니 아이템 가져오기
  const items = useCartStore((state) => state.items);

  return (
    <Base>
      <GNB type={GNB_TYPE.MAIN} />
      <Inner>
        <Box gap={30}>
          {!items || items.length <= 0 ? (
            <Text>등록된 상품이 없습니다.</Text>
          ) : (
            items.map((product, id) => (
              <ProductInCart key={id} product={product} />
            ))
          )}
        </Box>
      </Inner>
    </Base>
  );
}

export default CartPage;

const Base = styled.div`
  width: 100%;
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 72px 20px 69px;
`;
const Text = styled.div`
  font-family: "Pretendard Variable", sans-serif;
  font-size: 20px;
  font-weight: 550;
  line-height: 135%;
  text-align: center;
  color: #717171;

  width: 100%;
  margin-top: 60px;
`;
