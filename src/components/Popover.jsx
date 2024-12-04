import React from "react";
import { Button, Popover } from "antd";
const content = (
    <div>
        <p>Abdurahmon</p>
        <p>Isamjonov</p>
    </div>
);
const PopoverF = () => (
    <Popover content={content} title="Malumot">
        <Button type="primary">Full-name</Button>
    </Popover>
);
export default PopoverF;
