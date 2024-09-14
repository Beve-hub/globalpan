import { Container } from "@mantine/core"
import SettingsTop from "./screen/SettingsTop"
import BodySettings from "./screen/BodySettings"

const Settings = () => {
    return (
        <Container size="lg" my="md">
        <SettingsTop/>
        <BodySettings/>
    </Container>
    )
}

export default Settings
