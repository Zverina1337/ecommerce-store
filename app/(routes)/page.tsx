import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";

const HomePage = async () => {
    const billboard = await getBillboard("ee16b9f1-d07a-4ac4-9f7b-049357de2666")

    return (
        <Container>
           <div className="
                    space-y-10
                    pb-10
                "
           >
               <Billboard data={billboard}/>
           </div>
        </Container>
    );
};

export default HomePage;