import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './classes';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import getBubbleSortAnimation from './algComponent/BubbleSort'

import getInsertionSortAnimations from './algComponent/InsertionSort'
import getMergeSortAnimations from './algComponent/MergeSort'
import getQuickSortFirstAnimations from './algComponent/QuickSort'
import getSelectionSortAnimations from './algComponent/SelectionSort'
import getRadixSortLSDAnimations from './algComponent/RadixSortLSD'

import randomGenerator, {
    initArraySize, minElement, maxElement,
    initSpeed, initColor, changeColor, maxArraySize, findMax, maxSpeed, minSpeed, minArraySize
} from './Util'


const PrettoSlider = withStyles({
    root: {
        color: '#52af77',
        height: 8,
        width: 200,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);


const Panel = () => {

    const classes = useStyles();
    const [amount, setAmount] = useState(initArraySize);
    const [speed, setSpeed] = useState(initSpeed);
    const [isrunning, setRunning] = useState(false);

    const [array, setArray] = useState(() => {
        const initArray = [];
        for (let i = 0; i < initArraySize; i++) {
            initArray.push(randomGenerator(minElement, maxElement));
        }
        return initArray;
    });

    const handleAmountChange = (event, newVal) => {
        setAmount(newVal);
        const newarray = [];
        for (let i = 0; i < newVal; i++) {
            newarray.push(randomGenerator(minElement, maxElement));
        }
        setArray(newarray);
    }

    const handleSpeedChange = (event, newVal) => {
        console.log(speed);
        setSpeed(maxSpeed - newVal);
    }

    const bubbleSort = () => {
        const animationArray = getBubbleSortAnimation(array);
        setTimeout(() => { setRunning(false) }, animationArray.length * speed);
        const arrayBars = document.getElementsByClassName('array-bar');

        for (let i = 0; i < animationArray.length; i++) {
            const colorChange = i % 4 <= 1;
            if (colorChange) {
                const [barOneIdx, barTwoIdx] = animationArray[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? changeColor : initColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * speed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animationArray[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * speed);
            }
        }
    }

    const mergeSort = () => {

        const animationArray = getMergeSortAnimations(array);
        setTimeout(() => { setRunning(false) }, animationArray.length * speed);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animationArray.length; i++) {
            const colorChange = i % 3 !== 2;
            if (colorChange) {
                const [barOneIdx, barTwoIdx] = animationArray[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? changeColor : initColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * speed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animationArray[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * speed);
            }
        }
    }

    const quickSort = () => {
        const animationArray = getQuickSortFirstAnimations(array);
        setTimeout(() => { setRunning(false) }, animationArray.length * speed);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animationArray.length; i++) {
            const colorChange = i % 4 <= 1;
            if (colorChange) {
                const [barOneIdx, barTwoIdx] = animationArray[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? changeColor : initColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * speed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animationArray[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * speed);
            }
        }
    }

    const insertionSort = () => {
        const animationArray = getInsertionSortAnimations(array);
        setTimeout(() => { setRunning(false) }, animationArray.length * speed);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animationArray.length; i++) {
            const colorChange = i % 4 <= 1;
            if (colorChange) {
                const [barOneIdx, barTwoIdx] = animationArray[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? changeColor : initColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * speed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animationArray[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * speed);
            }
        }
    }

    const selectionSort = () => {
        const animationArray = getSelectionSortAnimations(array);
        setTimeout(() => { setRunning(false) }, animationArray.length * speed);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animationArray.length; i++) {
            const colorChange = i % 4 <= 1;
            if (colorChange) {
                const [barOneIdx, barTwoIdx] = animationArray[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? changeColor : initColor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * speed);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animationArray[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * speed);
            }
        }
    }

    const radixSortLSD = () => {
        const animationArray = getRadixSortLSDAnimations(array);
        const arrayBars = document.getElementsByClassName('array-bar');
        let index = 0;
        for (let i = 0; i < animationArray.length; i++) {

            if (i % 2 == 0) {
                for (let j = 0; j < animationArray[i].length; j++) {
                    const barIndex = animationArray[i][j];
                    const barStyle = arrayBars[barIndex].style;
                    const color = changeColor;
                    setTimeout(() => {
                        barStyle.backgroundColor = color;
                    }, index * speed);
                    index++;
                }
            } else {

                for (let j = 0; j < animationArray[i].length; j++) {
                    const [bar, newHeight] = animationArray[i][j];
                    const barStyle = arrayBars[bar].style;
                    const color = initColor;
                    setTimeout(() => {
                        barStyle.backgroundColor = color;
                        barStyle.height = `${newHeight}px`;
                    }, index * speed);
                    index++;
                }
            }
        }
    };



    return (

        <div>
            <div className={classes.margin} />
            <div className={classes.grid}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} elevation={2}>
                            <div className={classes.slider}>
                                <Typography gutterBottom>Amount</Typography>
                                <PrettoSlider valueLabelDisplay="auto"
                                    aria-label="pretto slider" defaultValue={initArraySize}
                                    min={minArraySize} max={maxArraySize}
                                    onChange={handleAmountChange}
                                    disabled={isrunning}
                                />
                                <Typography gutterBottom>Speed</Typography>
                                <PrettoSlider valueLabelDisplay="auto"
                                    aria-label="pretto slider" defaultValue={initSpeed}
                                    min={minSpeed} max={maxSpeed}
                                    onChange={handleSpeedChange}
                                    disabled={isrunning}
                                />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper} elevation={2}>
                            <Button variant="outlined" color="primary" className={classes.sortbutton}
                                disabled={isrunning}
                                onClick={(e) => mergeSort()}
                            >
                                Merge Sort
                            </Button>
                            <Button variant="outlined" color="primary" className={classes.sortbutton}
                                onClick={(e) => bubbleSort()}
                                disabled={isrunning}
                            >
                                Bubble Sort
                            </Button>
                            <Button variant="outlined" color="primary" className={classes.sortbutton}
                                onClick={(e) => selectionSort()}
                            >
                                Selection Sort
                            </Button>
                            <Button variant="outlined" color="primary" className={classes.sortbutton}
                                onClick={(e) => quickSort()}>
                                Quick Sort
                            </Button>
                        </Paper>
                        <div className={classes.margin} />
                        <Paper className={classes.paper} elevation={2}>
                            <Button variant="outlined" color="primary"
                                className={classes.sortbutton}>
                                Radix Sort (MSD)
                            </Button>
                            <Button variant="outlined" color="primary" className={classes.sortbutton}
                                onClick={(e) => radixSortLSD()}
                            >
                                Radix Sort (LSD)
                            </Button>

                            <Button variant="outlined" color="primary" className={classes.sortbutton}
                                onClick={(e) => insertionSort()}
                            >
                                Insertion Sort
                            </Button>
                            <Button variant="outlined" color="primary" className={classes.sortbutton}
                                disabled={true}
                            >
                                Bucket Sort
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paperfornums} elevation={2}>
                            <div
                                className="single-bar"
                                style={{
                                    height: `${maxElement + 20}px`,
                                    width: `${0}px`
                                }}
                            ></div>
                            {array.map((value, idx) => {
                                return
                                <div>
                                    <div
                                        className="array-bar"
                                        key={idx}
                                        style={{
                                            backgroundColor: initColor,
                                            height: `${value}px`,
                                            width: `${maxArraySize * 10 / array.length}px`
                                        }}></div>
                                </div>

                            })}

                        </Paper>


                    </Grid>


                </Grid>
            </div>
        </div>
    )
}


export default Panel;