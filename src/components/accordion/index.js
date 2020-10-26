import React, { useState, createContext, useContext } from "react";
import {
	Container,
	Item,
	Frame,
	Title,
	Body,
	Inner,
	Header,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useState(false);

	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Item {...restProps}>{children}</Item>;
		</ToggleContext.Provider>
	);
};
Accordion.Header = function AccodrionHeader({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);

	return (
		<Header
			{...restProps}
			onclick={() => setToggleShow((toggleShow) => !toggleShow)}
		>
			{children}
			{toggleShow ? (
				<img src="/images/icons/close-slim.png" alt="Close" />
			) : (
				<img src="/images/icons/add.png" alt="Open" />
			)}
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext);

	return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
