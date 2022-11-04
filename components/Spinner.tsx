import { CgSpinner } from 'react-icons/cg';

export default function Spinner(props:any) {
    let width = 40
    let height = 40 //w-[${width}px] h-[${height}px]

    // console.log(props,`props`)

    props.width?width=props.width:''
    props.height?height=props.height:''

    return (
      // <CgSpinner className={`animate-spin w-[50px] h-[50px]`} ></CgSpinner>
      <CgSpinner className={`animate-spin w-[${width}px] h-[${height}px]`} ></CgSpinner>
    );
}