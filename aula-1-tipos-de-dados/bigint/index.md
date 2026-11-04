Use `BigInt` quando **inteiros podem exceder `Number.MAX_SAFE_INTEGER`** (2⁵³ − 1 = 9.007.199.254.740.991) e a precisão exata é obrigatória.

## Casos típicos

- **IDs de sistemas distribuídos** (ex.: Snowflake IDs do Twitter, IDs de banco de dados 64-bit) que chegam via API/JSON e corrompem silenciosamente se tratados como `Number`
- **Criptografia** e cálculos com inteiros de tamanho arbitrário
- **Flags/bitmáscaras de 64 bits** (operações bitwise com `Number` perdem bits acima de 32)
- **Timestamps em nanossegundos** ou contadores que ultrapassam ~9 trilhões

## Quando NÃO usar

- Valores com **decimais** — `BigInt` só representa inteiros (`5n / 2n === 2n`)
- Operações com o objeto `Math` (`Math.floor`, `Math.sqrt`, etc. lançam `TypeError` com `BigInt`)
- Códigos de **alto desempenho** — `BigInt` é 5 a 50× mais lento que `Number`
- Qualquer valor que **caiba no range seguro** — use `Number` normalmente

## Regras práticas (MDN)

1. Use `BigInt` **somente** quando valores > 2⁵³ são razoavelmente esperados.
2. **Nunca misture** `BigInt` com `Number` em aritmética — lança `TypeError`:
   ```js
   10 + 10n;  // TypeError
   ```
3. Evite conversões entre os dois tipos; se precisar, converta explicitamente com `Number(x)` ou `BigInt(x)` e saiba que `Number(bigInt)` pode perder precisão.
4. Para serializar em JSON, converta para `string` (o `JSON.stringify` lança erro com `BigInt`).

**Resumo:** se o inteiro cabe em ~15 dígitos, use `Number`. Se pode passar disso e precisa de exatidão, use `BigInt`.

