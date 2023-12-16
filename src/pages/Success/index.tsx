import { Section, SectionContainer, IconContainer, Title, SubTitle, SuccessImage, SectionResponsiveContainer } from './styles';
import { Box, Row, Column } from '@components/Styled';
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import IllustrationSVG from '@assets/illustration.svg';
import { usePurchase } from '@hooks/usePurchase';

const paymentMethod = {
    credito: 'Cartão de Crédito',
    debito: 'Cartão de Débito',
    dinheiro: 'Dinheiro',
    pix: 'PIX'
}

export default function SuccessPage() {

    // Inicializations
    const theme = useTheme();
    const { purchase: { address, payMethod } } = usePurchase();

    return (
        <Section>
            <SectionContainer>
                <Column style={{ marginBottom: '40px' }}>
                    <Title>Uhu! Pedido confirmado</Title>
                    <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
                </Column>

                <SectionResponsiveContainer>
                    <Box 
                        $borderRadiusVariant
                        $gradientBorder
                        $paddingVariant
                    >
                        <Column style={{gap: '32px'}}>
                            <Row style={{ alignItems: 'center', gap: '12px', color: theme.color.base_700}}>
                                <IconContainer color={theme.color.primary}>
                                    <MapPin size={16} weight="fill" color={theme.color.white}/>
                                </IconContainer>
                                <Column>
                                    <p>Entrega em <b>{address.rua}, {address.numero}</b> {address.bairro} - {address.cidade}, {address.uf}</p>
                                </Column>
                            </Row>
                            <Row style={{ alignItems: 'center', gap: '12px', color: theme.color.base_700 }}>
                                <IconContainer color={theme.color.secondary}>
                                    <Timer size={16} weight="fill" color={theme.color.white}/>
                                </IconContainer>
                                <Column>
                                    <p>Previsão de entrega</p>
                                    <p><b>20 min - 30 min</b></p>
                                </Column>
                            </Row>
                            <Row style={{ alignItems: 'center', gap: '12px', color: theme.color.base_700 }}>
                                <IconContainer color={theme.color.secondary_dark}>
                                    <CurrencyDollar size={16} color={theme.color.white}/>
                                </IconContainer>
                                <Column>
                                    <p>Pagamento na entrega</p>
                                    <p><b>{paymentMethod[payMethod]}</b></p>
                                </Column>
                            </Row>
                        </Column>
                    </Box>
                    <Column>
                        <SuccessImage src={IllustrationSVG} alt="Pedido confirmado" />
                    </Column>

                </SectionResponsiveContainer>
            </SectionContainer>
        </Section>
    );
}