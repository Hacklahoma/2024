/* eslint-disable max-len */
import "../styles/util.scss";
import React from "react";

//  const ExpandIcon = () => (
//   <div className="expand-icon">
//     <div className="horizontal" />
//     <div className="vertical" />
//   </div>
// );

const Button = ({ children, href, style, ...rest }) => {
	//   const renderHTML = (rawHTML) => React.createElement("p", { dangerouslySetInnerHTML: { __html: rawHTML } });

	//   const openItem = () => {
	//     if (props.openedItem === props.question) {
	//       props.setOpenedItem("");
	//     }
	//     else {
	//       props.setOpenedItem(props.question);
	//     }
	//   }

	
	return (
		<a href={href}>
			<button className={`boxy ${style}`} {...rest}>
				{children}
			</button>
		</a>

		// <div className={`item ${props.openedItem === props.question ? 'show' : ''}`}>
		//   <button onClick={openItem}><p>{props.question}</p><ExpandIcon /></button>
		//     <AnimateHeight height={`${props.openedItem === props.question ? 'auto' : '0%'}`}>
		//       <div className="answer">
		//         {renderHTML(props.answer)}
		//       </div>
		//     </AnimateHeight>
		// </div>
	);
};

export default Button;
