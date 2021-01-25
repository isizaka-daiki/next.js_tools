import { createContext, useEffect, useState } from 'react';

import firebase from '../utils/Firebase';

const AuthContext = createContext({ currentUser: undefined });

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    undefined
  );

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  }, []);

  /* 下階層のコンポーネントをラップする */
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
