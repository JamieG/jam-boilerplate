//  Fragment shader for the ripple background effect.
//  Renders concentric, slowly expanding colour ripples across the quad.

export const rippleFragmentSource = `
precision mediump float;

varying vec2 outTexCoord;

uniform float uTime;

void main ()
{
    vec2 uv = outTexCoord;

    // Correct for the 16:9 game size so ripples stay circular.
    vec2 p = (uv - 0.5) * vec2(1.7777, 1.0);

    float dist = length(p);

    // Two moving wave phases: one for the colour blend, one for the ripple bands.
    float wave = sin(dist * 10.0 - uTime * 1.5);
    float band = 0.5 + 0.5 * sin(dist * 4.0 - uTime * 0.8);

    vec3 deep = vec3(0.10, 0.15, 0.35);
    vec3 mid = vec3(0.55, 0.15, 0.45);
    vec3 bright = vec3(0.15, 0.55, 0.60);

    vec3 color = mix(deep, mid, band);
    color = mix(color, bright, 0.5 + 0.5 * wave);

    // Soft vignette towards the edges.
    color *= 1.0 - 0.4 * dist;

    gl_FragColor = vec4(color, 1.0);
}
`;
