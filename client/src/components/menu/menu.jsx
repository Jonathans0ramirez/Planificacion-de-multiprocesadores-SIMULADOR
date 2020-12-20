import React from 'react';
import {
    Typography,
    Button
} from 'antd';

import 'antd/dist/antd.css';
import menuCss from './menu.module.css';

const { Paragraph } = Typography;

const IconButton = ({ src, text }) => (
    <Button className={menuCss['link']} type="link">
        <span>
            <img className={menuCss['link-icon']} src={src} alt={text} />
        </span>
        {text}
    </Button>
);

const ContentMenu = ({ children, extraContent }) => (
    <>
        {children && <div style={{ flex: 1 }}>{children}</div>}
        {extraContent && <div className={menuCss['image']}>{extraContent}</div>}
    </>
)

const Menu = ({ paragraphs, outputText, setOutputText, iconButtonObj }) => {

    const contenido = (
        <>
            {
                paragraphs && paragraphs.map((paragraph, index) => {
                    return <Paragraph key={index}>
                        {paragraph}
                    </Paragraph>
                })
            }
            {
                iconButtonObj && iconButtonObj.map((ib, index) => {
                    return <IconButton
                        key={index}
                        text={ib.text}
                        src={ib.src ? ib.src : ""}
                    />
                })
            }
        </>
    );

    return (
        <ContentMenu
        extraContent={
            <img
                src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                alt="content"
                width="100%"
            />
        }
        >
            {contenido}
        </ContentMenu>
    )
}

export default Menu;