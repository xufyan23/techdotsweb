import { useEffect, useCallback } from "react";
import { useGoogleReCaptcha, GoogleReCaptcha } from "react-google-recaptcha-v3";

const Recaptcha = ({ onVerifyCaptcha }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // const recaptchaLoaded = () => {
  //   console.log("capcha successfully loaded");
  // };

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("contact_form");

    console.log("verify", token);

    onVerifyCaptcha(token);
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  const clickHandler = async () => {
    if (!executeRecaptcha) {
      return;
    }

    const token = await executeRecaptcha("contactForm");
    onVerifyCaptcha(token);
  };

  return (
    <>
      <GoogleReCaptcha />
    </>
  );
};

export default Recaptcha;

