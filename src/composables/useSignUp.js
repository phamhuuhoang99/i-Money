import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signUp(email, password, fullName) {
  isPending.value = true;
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) throw new Error("Could not create a new user");

    console.log(fullName);

    await res.user.updateProfile({ displayName: fullName });

    console.log(res);
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
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
