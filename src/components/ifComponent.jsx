import AbcCard from "./abcCard";
import DisCard from "./disCard";
import EsCard from "./esCard";

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

export default IfComponent;