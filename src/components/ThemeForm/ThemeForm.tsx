import { BrightnessContrast, Light, Moon } from '@carbon/icons-react'
import { Checkbox, ContentSwitcher, IconSwitch } from '@carbon/react'

import { theme } from '../../App'

interface ThemeFormProps {
    setTheme: React.Dispatch<React.SetStateAction<theme>>
}

const ThemeForm = ({ setTheme }: ThemeFormProps) => {
    return (
        <>
            <ContentSwitcher
                size='sm'
                onChange={(e) => {
                    setTheme(e?.name as theme)
                }
                }
                selectedIndex={1}
            >
                <IconSwitch
                    name='g10'
                    text='Light'
                    value='g10'
                >
                    <Light size={20} />
                </IconSwitch>
                <IconSwitch
                    name='default'
                    text='Default'
                    value='default'
                >
                    <BrightnessContrast size={20} />
                </IconSwitch>
                <IconSwitch
                    name='g100'
                    text='Dark'
                    value='g100'
                >
                    <Moon size={20} />
                </IconSwitch>
            </ContentSwitcher>
            <Checkbox
                labelText='Global header reverse theme'
                id='inverse-theme'
                name='inverse-theme'
                checked={false}
                onChange={() => { }}
            ></Checkbox>
        </>
    )
}

export default ThemeForm