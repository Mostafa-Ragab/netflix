import React from "react";
import { useContent } from "../hooks";
import selectFilter from "../utils/selection-filter";
import BrowseContainer from "../containers/browse";

export default function Browse() {
	const { series } = useContent("series");
	const { films } = useContent("films");

	// I need the films and the series
	// I need slides
	const slides = selectFilter({ films, series });
	console.log(slides);
	// pass it to the browse container

	return <BrowseContainer>{slides}</BrowseContainer>;
}
