import { useEffect, useState } from "react";
import firebase from "@/services/firebase";

const useUsersWithRole = (role, itemsCount) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsersWithRole = async () => {
    try {
      setLoading(true);
      setError("");

      const docs = await firebase.getUsersWithRole(role, itemsCount);

      if (docs.empty) {
        setError("No users found with the specified role.");
        setLoading(false);
      } else {
        const items = [];

        docs.forEach((snap) => {
          const data = snap.data();
          items.push({ id: snap.ref.id, ...data });
        });

        setUsers(items);
        setLoading(false);
      }
    } catch (error) {
      setError("Failed to fetch users with the specified role.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersWithRole();
  }, []);

  return {
    users,
    fetchUsersWithRole,
    isLoading,
    error,
  };
};

export default useUsersWithRole;
