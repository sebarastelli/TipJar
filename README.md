# TipJar - Contrato de Propinas en Ethereum

Este proyecto implementa un contrato inteligente en Solidity para enviar y recibir propinas (tips) en ETH con un mensaje. Fue desplegado en la testnet Sepolia usando Hardhat y Ethers.js.

## 📦 Requisitos

- Node.js (recomendado v18+)
- Metamask con ETH de prueba en Sepolia
- Cuenta en Infura para obtener el RPC
- Hardhat
- Ethers.js
- dotenv

## 🚀 Instalación

1. Cloná el repo:

```bash
git clone https://github.com/tu-usuario/tipjar.git
cd tipjar
```

2. Instalá dependencias:

```bash
npm install
```

3. Configurá las variables de entorno en un archivo `.env` en la raíz:

```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/TU_INFURA_ID
PRIVATE_KEY=TU_CLAVE_PRIVADA
```

⚠️ No compartas tu clave privada. Usá una wallet de prueba.

## 🔨 Compilar el contrato

```bash
npx hardhat compile
```

## 📡 Deploy en Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

➡️ Anotá la dirección que aparece: será usada en los otros scripts.

## 💸 Scripts disponibles

1. Enviar propina:

```bash
npx hardhat run scripts/sendTip.js --network sepolia
```

2. Ver balance del contrato:

```bash
npx hardhat run scripts/getBalance.js --network sepolia
```

3. Retirar fondos (solo owner):

```bash
npx hardhat run scripts/withdraw.js --network sepolia
```

## 🧪 Ejecutar tests

```bash
npx hardhat test
```

Testea:
- Emisión del evento `NewTip`
- Restricción de `withdraw()` solo para el owner
- Actualización del balance al recibir propina

## 📁 Estructura

```
contracts/
  TipJar.sol

scripts/
  deploy.js
  sendTip.js
  getBalance.js
  withdraw.js

test/
  TipJar.js

.env
hardhat.config.js
```

## 📝 Autor

Hecho con ❤️ por Sebastián Rastelli