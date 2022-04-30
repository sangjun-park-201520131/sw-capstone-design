import { useContext } from "react";
import GoogleLogin from "react-google-login";
import GlobalStyle from "../GlobalStyle";
import { postData } from "./http-request";
import { BearerTokenContext } from "../App";

const LoginButton = ({ loginHandler }) => {
  const { currentToken, setBearerToken } = useContext(BearerTokenContext);

  const clientId =
    "112172327061-95mqb878sgpt8t955rkkdug7mvgco8od.apps.googleusercontent.com";

  const onSuccess = async (res) => {
    loginHandler(true);
    await postData("auth/google", {
      googleTokenId: res.tokenId,
    }).then((response) => {
      setBearerToken(response.data.token);
      console.log(currentToken);
    });
  };

  const onFailure = (res) => {
    console.log("로그인 실패 :/", res);
  };

  return (
    <>
      <GlobalStyle />
      <GoogleLogin
        clientId={clientId}
        buttonText={"로그인"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
};

export default LoginButton;
