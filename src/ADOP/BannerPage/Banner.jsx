import TextPart from "./TextPart";
export default function Banner() {
    const bannerStyle = {
        backgroundImage: 'url("https://i.pinimg.com/736x/86/26/46/862646c4c51c3afffbf5aa15ca0d8f6a.jpg")',
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '30rem',
        width: '100%' 
    };

    return (
       <>
           <div style={bannerStyle}>
           
           </div>
        <TextPart/>
       </>
    );
}
