import styled from '@emotion/styled';

export const DiaryListBox = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: start;
  padding-left: 11px;
  flex-wrap: wrap;
  gap: 35px;

  .empty-diary {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 54vh;

    p {
      font-size: 22px;
      color: #495057;
    }
  }
  .diary-item {
    width: 310px;
    border-radius: 4px;
    border: none;
    background-color: #f9f7f7;
    box-shadow: 0px 0px 6px 2px rgb(0 0 0 / 17%);
    transition: transform 0.25s ease-in;
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
    }
  }
  .img-wrap {
    width: 100%;
    height: 180px;
    box-shadow: 0 0 5px 1px rgb(0 0 0 / 8%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
  .cnt-inner {
    padding: 17px 20px;
  }
  .cnt-inner .title span {
    font-size: 18px;
    height: 22px;
    font-weight: bolder;
  }
  .cnt-inner .content {
    margin-top: 12px;
    height: 70px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
  }

  .create-date {
    margin-top: 15px;
    font-size: 12px;
  }
`;