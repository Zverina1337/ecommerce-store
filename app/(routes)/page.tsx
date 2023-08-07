import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("ee16b9f1-d07a-4ac4-9f7b-049357de2666")

    return (
        <Container>
            <div className="
                     space-y-10
                     pb-10
                 "
            >
                <Billboard data={billboard}/>
                <div className="
                    flex
                    flex-col
                    gap-y-8
                    px-4
                    sm:px-6
                    lg:px-8
                "
                >
                    <ProductList
                        title="Featured Products"
                        items={products}
                    />
                </div>
            </div>
        </Container>
    );
};

export default HomePage;