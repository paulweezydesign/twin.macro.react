import tw, { css } from "twin.macro"

const stylesBase = css`
  .light {
    --bg-primary: #ffffff;
    --bg-secondary: #f1f5f9;
    --text-primary: #191919;
    --text-secondary: #1e293b;
    --color-primary: #e11d48;
  }
  .dark {
    --bg-primary: #191919;
    --bg-secondary: #1e293b;
    --text-primary: #ffffff;
    --text-secondary: #ffffff;

    --color-primary: #2563eb;
  }
  body {
    ${tw`bg-primary text-primary transition-all duration-200`}
  }
`

export default stylesBase
