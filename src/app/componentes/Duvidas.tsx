import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Duvidas = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 text-center">
                <p className="text-lg text-muted-foreground uppercase tracking-[0.14em]">
                    Tire suas dúvidas sobre nossos produtos e serviços.
                </p>
                <h1 className="text-2xl font-bold mb-4">Dúvidas Frequentes</h1>
            </div>

            <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Demora para chegar o produto?</AccordionTrigger>
                    <AccordionContent>
                        Depende. Ele é feito com muito carinho e cuidado, por isso demora um pouco para chegar.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Qual o prazo de entrega?</AccordionTrigger>
                    <AccordionContent>
                        O prazo de entrega varia conforme a região e o tipo de produto. Geralmente, leva de 5 a 10 dias úteis.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Como rastrear meu pedido?</AccordionTrigger>
                    <AccordionContent>
                        Você pode rastrear seu pedido utilizando o número do pedido e o e-mail cadastrado em nossa loja.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Como posso trocar o produto?</AccordionTrigger>
                    <AccordionContent>
                        Você pode trocar o produto em até 30 dias após a compra, desde que esteja em perfeito estado e com a etiqueta de devolução colada.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Duvidas