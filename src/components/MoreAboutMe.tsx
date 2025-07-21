import Terminal from "./Terminal";
import Window from "./Window";

function MoreAboutMe() {

  return (
    <div className="p-8">
      <Window backgroundColor="black" minHeight={325}>
        <Terminal />
      </Window>
    </div>
  );

}

export default MoreAboutMe;