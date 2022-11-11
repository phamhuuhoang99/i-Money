import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password) {
  isPending.value = true;
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) throw new Error("Could not create a new user");
    return res;
  } catch (err) {
    console.log(error);
    throw new Error(err.message);
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return {
    signUp,
    error,
    isPending,
  };
}
