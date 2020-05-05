/**
 * An example of using the repository pattern with Firebase.
 * It makes it easer to migrate away from Firebase in the future by having all your
 * database code de-coupled from your React Components or mobx store, wrapped up in
 * a custom, easily transferrable DSL
 */
import auth from '@react-native-firebase/auth';

class AuthRepository {
  signIn = (email: string, password: string) => {
    return auth().signInWithEmailAndPassword(email, password);
  };

  register = (email: string, password: string) => {
    return auth().createUserWithEmailAndPassword(email, password);
  };
}

const authRepository = new AuthRepository();
export default authRepository;
