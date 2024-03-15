import PCBuild from '../assets/svg/skills/computer.svg'
import troubleshooting from '../assets/svg/skills/troubleshooting.svg'
import Networking from '../assets/svg/skills/Networking.svg'
import CCTVInstallation from '../assets/svg/skills/CCTV.svg'

import { PhoneCallbackOutlined } from '@material-ui/icons'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'PCBuild':
            return PCBuild;
        case 'troubleshooting':
            return troubleshooting;
        case 'Networking':
                return Networking;  
        case 'CCTVInstallation':
                    return CCTVInstallation;
               default:
            break;
    }
}
