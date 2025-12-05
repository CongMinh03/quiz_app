const getMessage = (score, total) => {
  const percent = (score / total) * 100;

  if (percent === 100) return "Quá bá, full combo luôn!";
  if (percent >= 80) return "Rất tốt, tiếp tục phát huy nhé! ";
  if (percent >= 50) return "Ổn rồi, luyện thêm là ngon! ";
  return "Cần luyện thêm xíu nữa, cố lên! ";
};

const Results = ({ score, totalQuestionNum, restartQuiz, rewatchQuiz }) => {
  const percent = Math.round((score / totalQuestionNum) * 100);
  const message = getMessage(score, totalQuestionNum);

  return (
    <div className="results">
      <h2>Kết Quả</h2>
      <p className="result">
        Bạn trả lời đúng {score} / {totalQuestionNum} câu ({percent}%)
      </p>
      <p className="result-message">{message}</p>

      <div className="resultButtonsContainer">
        <button className="result-button" onClick={rewatchQuiz}>
          Xem lại
        </button>
        <button className="result-button" onClick={restartQuiz}>
          Làm lại
        </button>
      </div>
    </div>
  );
};

export default Results;