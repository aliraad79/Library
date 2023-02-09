import { atom } from "recoil";

const authDataAtom = atom({
  key: "authData",
  default: {
    isValid: false,
  },
});


const userJWTAtom = atom({
  key: "userJWT",
  default: { access: "", refresh: "" },
});


export { authDataAtom, userJWTAtom };
