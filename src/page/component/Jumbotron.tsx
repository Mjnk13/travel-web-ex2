type JumbotronProps = {
  children?: React.ReactNode;
  cssBackground: string; 
  titleOne?: string;
  titleTwo?: string;
}


const Jumbotron = (props: JumbotronProps) => {
    return ( 
      <div className={'jumbotron jumbotron-' + props.cssBackground + ' position-relative'}>
        <div className='container position-relative'>
          {props.children !== undefined ? props.children : 
            <div className="text-center text-white position-absolute w-100" style={{zIndex: "1", top: "35vh"}}>
              <h5>{props.titleOne}</h5>
              <h1 className="fw-bold">{props.titleTwo}</h1>
            </div>
          }
        </div>
      </div>
     );
}
 
export default Jumbotron;