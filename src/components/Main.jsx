

const Main = () => {
  return (
    <div className="grid grid-cols-2 gap-4" style={{
        width: "calc(100% - 25rem)",
        position: 'absolute',
        top: "10rem",
        left: "25rem",
        display: "grid",
      }}
    >
      <a href="/mainFournisseur">
        <div className="p-4"
          style={{
            width: "300px",
            height: "290px",
            display: 'flex',
            flexDirection: "column",

            alignItems: "center",
            justifyContent: "center",
            position: "relative"
          }}
        >
          <div style={
            {
              width: "70%",
              height: "70%",
              borderRadius: "50%",
              background: "#fff",
              zIndex: 100
            }
          }>
          
            <img src="src/assets/img/provider.png"/> 
          </div>
          <h2 className='text-xl font-bold'>LISTE FOURNISSEUR</h2>
        </div>
      </a>
      <div className="p-4"
        style={{
          width: "300px",
          height: "290px",
          display: 'flex',
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <div style={
          {
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            background: "#fff",
            zIndex: 100
          }
        }>
        
           <img src="src/assets/img/request.png"/> 
        </div>
        <h2 className='text-xl font-bold'>DEMANDER UN DEVIS</h2>
      </div>
      <div className="p-4"
        style={{
          width: "300px",
          height: "290px",
          display: 'flex',
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <div style={
          {
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            background: "#fff",
            zIndex: 100
          }
        }>
        
           <img src="src/assets/img/article.png"/> 
        </div>
        <h2 className='text-xl font-bold'>LISTE D ARTICLE</h2>
      </div>
      <div className="p-4"
        style={{
          width: "300px",
          height: "290px",
          display: 'flex',
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <div style={
          {
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            background: "#fff",
            zIndex: 100
          }
        }>
        
           <img src="src/assets/img/historic.png"/> 
        </div>
        <h2 className='text-xl font-bold'>HISTORIQUE</h2>
      </div>
      </div>
  );
};

export default Main;
