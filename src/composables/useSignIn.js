import { projectAuth } from "@/configs/firebase";
import { ref } from "vue";

const error = ref(null);
const isPending = ref(false);

async function signIn(email, password) {
  try {
    error.value = null;
    isPending.value = true;

    const res = await projectAuth.signInWithEmailAndPassword(email, password);

    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return {
    error,
    isPending,
    signIn,
  };
}
