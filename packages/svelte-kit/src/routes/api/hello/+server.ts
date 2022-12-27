import { getCommonStr } from '@qt/common';

export function GET() {
  return new Response(
    JSON.stringify({
      message: getCommonStr(),
    }),
  );
}
