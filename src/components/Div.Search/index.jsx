import { useState } from "react";
import { Col } from "react-bootstrap"
import { Search_Input } from "../Search_Input/Index"


export const DivSearch = () => {
    const [searchValue, setsearchValue] = useState('');
    function handleSonchange (e) {
        return setsearchValue(e.target.value)
    }
    console.log(searchValue)
    return (
        <Col>
            <SearchInput searchValue={searchValue} onChange={handleSonchange} />
        </Col>
    )
}