import { useEffect, useState, useDebugValue } from "react";

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusIsChanged(status) {
      setIsOnline(status.isOnline);
    }
    FAKEAPI.subscribeToFriendStatus(friendId, handleStatusIsChanged);

    return () => {
      FAKEAPI.unsubscribeToFriendStatus(friendId, handleStatusIsChanged);
    };
  }, [friendId]);

  useDebugValue(isOnline ? "Online" : "Offline");

  return isOnline;
}
