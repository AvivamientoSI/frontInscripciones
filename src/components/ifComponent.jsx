import {AbcCard, AbcCardTable} from "./abcCard";
import DisCard, {DisCardTable} from "./disCard";
import EsCard, {EsCardTable} from "./esCard";

const IfComponent = ({school, index}) => {
    try {
            if (school.name === "ABC") {
                return <AbcCard key={school.id || index} school={school} />;
            } else if (school.name === "Escuela de Vida") {
                return <EsCard key={school.id || index} school={school} />;
            } else if (school.name === "Discipulado") {
                return <DisCard key={school.id || index} school={school} />;
            }
        } catch (error) {
            console.log("Error", error);
    }
    return null;
}

 export const IfComponentTable = ({school, index}) => {
    try {
            if (school.name === "ABC") {
                return <AbcCardTable key={school.id || index} school={school} />;
            } else if (school.name === "Escuela de Vida") {
                return <EsCardTable key={school.id || index} school={school} />;
            } else if (school.name === "Discipulado") {
                return <DisCardTable key={school.id || index} school={school} />;
            }
        } catch (error) {
            console.log("Error", error);
    }
    return null;
}

export default IfComponent;