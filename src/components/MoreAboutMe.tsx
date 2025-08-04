import Terminal from "./Terminal";
import Window from "./Window";

function MoreAboutMe() {

  return (
    <div className="p-8" style={{width: 600}}>
      <Window backgroundColor="black" minHeight={350}>
        <Terminal />
      </Window>
    </div>
  );

}

export default MoreAboutMe;