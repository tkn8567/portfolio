import React from "react";
import { Modal, Button, Input, Link} from "@nextui-org/react";

export default function LoginModal() {
const [visible, setVisible] = React.useState(false);
const handler = () => setVisible(true);

const closeHandler = () => {
setVisible(false);
console.log("closed");
};

return (
<div>
    <div className='text-lg font-jost text-justify cursor-pointer leading-4' onClick={handler}>
    Owner's Page
    </div>
    <Modal
    closeButton
    open={visible}
    onClose={closeHandler}
    >
    <Modal.Header>
        <div className='font-bold'>&#42;This page is just for owner.</div>
    </Modal.Header>
    <Modal.Body>
        <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="sm"
        placeholder="Username"
        />
        <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="sm"
        placeholder="Password"
        />
    </Modal.Body>
    <Modal.Footer>
        <Button auto flat color="error" onClick={closeHandler}>
        Close
        </Button>
        <Button auto>
            <Link href="/owner"><div className='text-white'>Sign in</div></Link>
        </Button>
    </Modal.Footer>
    </Modal>
</div>
);
}