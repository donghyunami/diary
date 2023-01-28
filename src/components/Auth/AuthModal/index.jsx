import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dropAuthModal } from "@store/reducers/auth";
import Modal from "@components/base/Modal";
import { AuthFormModal } from "./styles";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import SingUpForm from "../SingUpForm";
import LogInForm from "../LogInForm";
import { useEffect } from "react";

const AuthModal = (props) => {
  const { authType, setAuthType } = props;
  // 로그인 / 회원가입에 따라 컴포넌트 불러오게 하자!
  const { isShowAuthModal } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(dropAuthModal(false));
    setAuthType((prev) => (prev = "login"));
  };

  return (
    <>
      <Modal isShowModal={isShowAuthModal} onCloseModal={onCloseModal}>
        <AuthFormModal>
          {authType === "singup" ? (
            <SingUpForm {...props} />
          ) : (
            <LogInForm {...props} />
          )}
        </AuthFormModal>
      </Modal>
    </>
  );
};

export default AuthModal;
