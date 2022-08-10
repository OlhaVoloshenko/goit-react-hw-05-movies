import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

export const BackLink = ({ prevLocation }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(prevLocation || '/');
  };
  return (
    <button onClick={goBack}>
      <MdOutlineKeyboardBackspace />
      Go back
    </button>
  );
};
