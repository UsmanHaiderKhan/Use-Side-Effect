import { use } from "react";
import { useEffect, useState } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const TIMER = 3000;
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval();
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);
  }, [])


  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
