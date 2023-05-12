// import React from 'react';
// import classes from '../styles/Question.module.css';
// import Answers from './Answers';

// export default function Question({ answers = [] }) {
//   return (
//     <div>
//       {answers.map((answer, index) => (
//         <div className={classes.question} key={index}>
//           <div className={classes.qtitle}>
//             <span className="material-icons-outlined">help_outline</span>
//             {answer.title}
//           </div>
//           <Answers input={false} options={answer.options} />
//         </div>
//       ))}
//     </div>
//   );
// }
import React from 'react';
import Answers from './Answers';

export default function Question({ answers = [] }) {
  return (
    <div className="bg-white p-4 my-4 rounded">
      {answers.map((answer, index) => (
        <div key={index}>
          <div className="flex items-center text-primary font-semibold mb-2">
            <span className="material-icons-outlined text-active mr-2">help_outline</span>
            {answer.title}
          </div>
          <Answers input={false} options={answer.options} />
        </div>
      ))}
    </div>
  );
}

