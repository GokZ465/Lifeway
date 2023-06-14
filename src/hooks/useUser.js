import { useDidMount } from "@/hooks";
import { useEffect, useState } from "react";
import firebase from "@/services/firebase";

const useUser = (id) => {
  console.log("reaches here");
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const doc = await firebase.getSingleUser(id);
        console.log("doc", doc);
        if (doc.exists) {
          const data = { ...doc.data(), id: doc.ref.id };

          if (didMount) {
            setUser(data);
            setLoading(false);
            console.log("user", user);
          }
        } else {
          setError("User not found.");
        }
      } catch (err) {
        if (didMount) {
          setLoading(false);
          setError(err?.message || "Something went wrong.");
        }
      }
    })();
  }, [id]);

  return { user, isLoading, error };
};

export default useUser;
