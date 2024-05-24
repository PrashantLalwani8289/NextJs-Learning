import { notFound } from "next/navigation";


export default function ReviewDetail({params}:{
    params:{reviewId:string}
}){

    if(parseInt(params.reviewId) > 1000){
        notFound();
    }

    return (
        <h2>Hello I am review {params.reviewId}</h2>
    )
}