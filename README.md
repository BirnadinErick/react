# react
game that checks the reflex

**Note**: inspired and partial clone of https://play.google.com/store/apps/details?id=com.nixgames.reaction&hl=en&gl=US&pli=1

## functional req

- measure color change
- recon the number

## plan of attack

1. init the repo x
2. choose tech stack x 
3. do foundational design
4. create ui 
5. create the functional requirements:
    - color change x
    - number recongnization x
6. create result page x
7. -\('')/-

## todo

- add git hooks to lint and stage after bumping the version

## known bugs

- in color change, button should say start and then count
- add loader to indicate next step
- in color change, button should be clicked another time to trigger the result
- revisit the logic to end the game loop

## Lesons learned.

1. place tailwind classes somewhere in the source text, when using dynamic utils: https://youtu.be/aSlK3GhRuXA?t=244
2. states in react, only update in new render: https://react.dev/reference/react/useState#ive-updated-the-state-but-logging-gives-me-the-old-value
3. setTimeout takes time in milliseconds. 
4. hooks can only be used inside the function body components
5. in useEffect any state wouldbe captured and might be dirty when run.
