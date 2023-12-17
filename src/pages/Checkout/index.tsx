import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

import {
    SectionContainer,
    Text,
    Title,
    InputText,
    PayMethodButton,
    ProductList,
    PaymentConfirmButton,
    PaymentInfoContainer,
    PaymentInfoLine,
    PaymentInfoTitle,
    PaymentInfoValue,
    Section,
    SectionPaymentColumn,
    SectionProductsColumn,
    PayMethodGroupButton,
    ColumnResponsive
} from './Styles';

import { Box, Column, Row } from "@components/Styled";
import { ProductItem } from "@components/ProductItem";

import { 
    CurrencyDollar, 
    MapPinLine, 
    CreditCard,
    Bank,
    Money,
    Infinity
} from "@phosphor-icons/react";

import formatTo from "@utils/formatTo";
import { formatCurrency } from '@utils/currency';
import { usePurchase } from "@hooks/usePurchase";

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

type ItemType = {
    id: string,
    name: string,
    imgPath: string,
    price: number,
    qtde: number,
    subTotal: number
}

const PurchaseFormAddress = z.object({
    cep: z.string().min(1, 'Informe o CEP'),
    rua: z.string().min(1, 'Informe o logradouro'),
    numero: z.string().min(1, 'Informe o número'),
    complemento: z.string(),
    bairro: z.string().min(1, 'Informe o bairro'),
    cidade: z.string().min(1, 'Informe a cidade'),
    uf: z.string().min(2, 'Informe UF válido').max(2, 'Informe UF válido')
});

type PurchaseFormAddressType = z.infer<typeof PurchaseFormAddress>;

export function CheckoutPage() {

    // Inicializations
    const theme = useTheme();
    const navigate = useNavigate();

    const { 
        purchase,
        removeItemFromCartAction,
        updateItemQTDEInCartAction,
        updateAddress,
        updatePaymentMethod
    } = usePurchase();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<PurchaseFormAddressType>({
        resolver: zodResolver(PurchaseFormAddress),
    });

    // Handlers
    function handleRemoveItemFromCart(itemId: string) {
        removeItemFromCartAction(itemId);
    }

    function handleChangeItemQTDE(item: ItemType) {
        updateItemQTDEInCartAction(item);
    }

    function handleChangePaymentMethod(payMethod: string) {
        updatePaymentMethod(payMethod);
    }

    function handleChangeAddress(key: string, value: string) {
        updateAddress(key, value);
    }

    function handleConfirmPurchase(formData: PurchaseFormAddressType) {
        
        if(formData) {
            navigate('/purchage_finish');
        }
    }

    return (
        <Section>

            <SectionContainer $gap="lg">

                <SectionPaymentColumn $fullWidth $gap="md">
                    <Title as="h2" $size="xs">
                        Complete seu pedido
                    </Title>
                    <Column $gap="sm">
                        <Box $paddingVariant>
                            <Column $gap="lg">

                                <Row $gap="xs">
                                    <Column>
                                        <MapPinLine 
                                            size={22} weight="bold"
                                            color={theme.color.secondary}
                                        />
                                    </Column>
                                    <Column>
                                        <Text 
                                            $size="md"
                                            $color={theme.color.base_800}
                                        >
                                            Endereço de Entrega
                                        </Text>
                                        <Text 
                                            $size="sm"
                                            $color={theme.color.base_700}
                                        >
                                            Informe o endereço onde deseja receber seu pedido
                                        </Text>
                                    </Column>
                                </Row>

                                <Column $gap="md">
                                    <Row>
                                        <ColumnResponsive $col={4}>
                                            <InputText 
                                                placeholder="CEP"
                                                value={formatTo.cep(purchase.address.cep)}
                                                {
                                                    ...register('cep', { 
                                                        onChange(e) {
                                                            handleChangeAddress('cep', e.target.value)
                                                        }, 
                                                    })
                                                }
                                            />
                                            {errors.cep && <Text $size="sm" $color={theme.color.secondary_dark}>{errors.cep.message}</Text>}
                                        </ColumnResponsive>
                                    </Row>
                                    <Row>
                                        <Column $col={12}>
                                            <InputText 
                                                placeholder="Rua, Avenida ..."
                                                value={purchase.address.rua}
                                                {
                                                    ...register('rua', {
                                                        onChange(e) { 
                                                            handleChangeAddress('rua', e.target.value)
                                                        }
                                                    })
                                                }
                                            />
                                            {errors.rua && <Text $size="sm" $color={theme.color.secondary_dark}>{errors.rua.message}</Text>}
                                        </Column>
                                    </Row>
                                    <Row $gap="sm">
                                        <Column $col={4}>
                                            <InputText
                                                placeholder="Número"
                                                value={purchase.address.numero}
                                                {
                                                    ...register('numero', {
                                                        onChange(e) { 
                                                            handleChangeAddress('numero', e.target.value)
                                                        }
                                                    })
                                                }
                                            />
                                            {errors.numero && <Text $size="sm" $color={theme.color.secondary_dark}>{errors.numero.message}</Text>}
                                        </Column>
                                        <Column $col={8}>
                                            <InputText
                                                placeholder="Complemento"
                                                value={purchase.address.complemento}
                                                {
                                                    ...register('complemento', {
                                                        onChange(e) { 
                                                            handleChangeAddress('complemento', e.target.value)
                                                        }
                                                    })
                                                }
                                            />
                                            {errors.complemento && <Text $size="sm" $color={theme.color.secondary_dark}>{errors.complemento.message}</Text>}
                                        </Column>
                                    </Row>
                                    <Row $gap="sm">
                                        <ColumnResponsive $col={4}>
                                            <InputText 
                                                placeholder="Bairro"
                                                value={purchase.address.bairro}
                                                {
                                                    ...register('bairro', {
                                                        onChange(e) { 
                                                            handleChangeAddress('bairro', e.target.value)
                                                        }
                                                    })
                                                }
                                            />
                                            {errors.bairro && <Text $size="sm" $color={theme.color.secondary_dark}>{errors.bairro.message}</Text>}
                                        </ColumnResponsive>
                                        <ColumnResponsive $col={7}>
                                            <InputText 
                                                placeholder="Cidade"
                                                value={purchase.address.cidade}
                                                {
                                                    ...register('cidade', {
                                                        onChange(e) { 
                                                            handleChangeAddress('cidade', e.target.value)
                                                        }
                                                    })
                                                }
                                            />
                                            {errors.cidade && <Text $size="sm" $color={theme.color.secondary_dark}>{errors.cidade.message}</Text>}
                                        </ColumnResponsive>
                                        <ColumnResponsive $col={1}>
                                            <InputText 
                                                placeholder="UF"
                                                value={purchase.address.uf}
                                                {
                                                    ...register('uf', {
                                                        onChange(e) { 
                                                            handleChangeAddress('uf', e.target.value)
                                                        }
                                                    })
                                                }
                                            />
                                            {errors.uf && <Text $size="sm" $color={theme.color.secondary_dark}>{errors.uf.message}</Text>}
                                        </ColumnResponsive>
                                    </Row>
                                </Column>
                            </Column>
                        </Box>

                        <Box $paddingVariant>
                            <Row $gap="xs" style={{marginBottom: '32px'}}>
                                <Column>
                                    <CurrencyDollar 
                                        size={22} weight="bold"
                                        color={theme.color.primary}
                                    />
                                </Column>
                                <Column $gap="lg">
                                    <Column>
                                        <Text 
                                            $size="md"
                                            $color={theme.color.base_800}
                                        >
                                            Pagamento
                                        </Text>
                                        <Text 
                                            $size="sm"
                                            $color={theme.color.base_700}
                                        >
                                            O pagamento é feito na entrega. Escolha a forma que deseja pagar
                                        </Text>
                                    </Column>
                                </Column>
                            </Row>

                            <PayMethodGroupButton $gap="xs">
                                <PayMethodButton
                                    $variant={purchase.payMethod === 'credito'}
                                    onClick={() => handleChangePaymentMethod('credito')}
                                >
                                    <CreditCard size={16} color={theme.color.primary}/>
                                    Cartão de Crédito
                                </PayMethodButton>
                                <PayMethodButton
                                    $variant={purchase.payMethod === 'debito'}
                                    onClick={() => handleChangePaymentMethod('debito')}
                                >
                                    <Bank size={16} color={theme.color.primary}/>
                                    Cartão de Débito
                                </PayMethodButton>
                                <PayMethodButton
                                    $variant={purchase.payMethod === 'dinheiro'}
                                    onClick={() => handleChangePaymentMethod('dinheiro')}
                                >
                                    <Money size={16} color={theme.color.primary}/>
                                    Dinheiro
                                </PayMethodButton>
                                <PayMethodButton
                                    $variant={purchase.payMethod === 'pix'}
                                    onClick={() => handleChangePaymentMethod('pix')}
                                >
                                    <Infinity size={16} color={theme.color.primary}/>
                                    PIX
                                </PayMethodButton>
                            </PayMethodGroupButton>
                        </Box>
                    </Column>
                </SectionPaymentColumn>

                <SectionProductsColumn $gap="md">
                    <Title as="h2" $size="xs">
                        Cafés selecionados
                    </Title>
                    <Box
                        $borderRadiusVariant
                        $paddingVariant
                        style={{display: 'flex', flex: 1}}
                    >
                        <Column
                            style={{flex: 1, }}
                        >
                            <ProductList>
                                {   
                                purchase.items.length > 0 && purchase.items.map(produto => <ProductItem 
                                        data={produto} 
                                        key={produto.id}
                                        onRemove={handleRemoveItemFromCart}
                                        onChangeQTDE={handleChangeItemQTDE}
                                />)
                                }
                            </ProductList>

                            <PaymentInfoContainer>

                                <PaymentInfoLine>
                                    <PaymentInfoTitle>Total de itens</PaymentInfoTitle>
                                    <PaymentInfoValue>R$ {formatCurrency(purchase.subTotal).format()}</PaymentInfoValue>
                                </PaymentInfoLine>

                                <PaymentInfoLine>
                                    <PaymentInfoTitle>Entrega</PaymentInfoTitle>
                                    <PaymentInfoValue>R$ {formatCurrency(purchase.taxaEntrega).format()}</PaymentInfoValue>
                                </PaymentInfoLine>

                                <PaymentInfoLine>
                                    <PaymentInfoTitle $variant>Total</PaymentInfoTitle>
                                    <PaymentInfoValue $variant>R$ {formatCurrency(purchase.total).format()}</PaymentInfoValue>
                                </PaymentInfoLine>

                            </PaymentInfoContainer>

                            <PaymentConfirmButton
                                onClick={handleSubmit(handleConfirmPurchase)}
                            >
                                Confirmar Pedido
                            </PaymentConfirmButton>
                        </Column>
                    </Box>
                </SectionProductsColumn>

            </SectionContainer>

        </Section>
    );
}


