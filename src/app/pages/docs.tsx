import React, {useState} from "react";
import {Box} from "../components/elements/Box";

enum SortType {
    COLUMN = 1,
    ROW,
    ROW_BREAK_LINE,
    CENTER,
    END,
    START,
    TOP,
    BOTTOM,
    STRETCH,
    SPACE_BETWEEN
}

export const Docs = () => {
    const [properties, setProperties] = useState<{width: number, height: number, gap: number}>({width: 100, height: 100, gap: 10})
    const [type, setType] = useState<number>(SortType.COLUMN)
    return (
        <div>
            <div style={{ padding: '20px', maxWidth: '720px', margin: '0 auto'}}>
                <h1 style={{textTransform: 'uppercase'}}>basic example for flex box</h1>
                <div>
                    <p>Gap: </p>
                    <input type="number" value={properties.gap} onChange={(e) => setProperties({...properties, gap: Number(e.target.value as string)})}/>
                </div>
                <div>
                    <p>Width: </p>
                    <input type="number" value={properties.width} onChange={(e) => setProperties({...properties, width: Number(e.target.value as string)})}/>
                </div>
                <div>
                    <p>Height: </p>
                    <input disabled={type === SortType.STRETCH} type="number" value={properties.height} onChange={(e) => setProperties({...properties, height: Number(e.target.value as string)})}/>
                </div>

                <div style={{ marginTop: '10px'}}>
                    <select name="type" id="select" placeholder={'Select type here'} onChange={(e) => setType(Number(e.target.value))}>
                        <option value={SortType.COLUMN}>Column</option>
                        <option value={SortType.ROW}>Row</option>
                        <option value={SortType.STRETCH}>Stretch</option>
                        <option value={SortType.BOTTOM}>Bottom</option>
                        <option value={SortType.END}>Flex end</option>
                        <option value={SortType.ROW_BREAK_LINE}>Row break line</option>
                        <option value={SortType.START}>Flex start</option>
                        <option value={SortType.CENTER}>Center</option>
                        <option value={SortType.TOP}>Top</option>

                        <option value={SortType.SPACE_BETWEEN}>Space between</option>
                    </select>
                </div>
                <div style={{ width: '100%', height: '600px', marginTop: '10px'}}>
                    {type === SortType.COLUMN &&
                        <div style={{ display: "flex",
                            flexDirection: 'column',
                            width: "100%", height: '100%',
                            gap: `${properties.gap}px`}}
                        >
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                        </div>
                    }
                    {type === SortType.ROW &&
                        <div style={{ display: "flex", width: "100%", gap: `${properties.gap}px`, height: '100%',flexDirection: 'row'}}>
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                        </div>
                    }
                    {type === SortType.ROW_BREAK_LINE &&
                        <div style={{ display: "flex", width: "100%",height: '100%', gap: `${properties.gap}px`, flexDirection: 'row', flexWrap: 'wrap'}}>
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                        </div>
                    }
                    {type === SortType.END &&
                        <div style={{ display: "flex", width: "100%",height: '100%', gap: `${properties.gap}px`, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                        </div>
                    }
                    {type === SortType.SPACE_BETWEEN &&
                        <div style={{ display: "flex", width: "100%",height: '100%', gap: `${properties.gap}px`, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                        </div>
                    }
                    {type === SortType.START &&
                        <div style={{ display: "flex", width: "100%",height: '100%', gap: `${properties.gap}px`, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                        </div>
                    }
                    {type === SortType.CENTER &&
                        <div style={{ display: "flex", width: "100%",height: '100%', gap: `${properties.gap}px`, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                        </div>
                    }
                    {type === SortType.TOP &&
                        <div style={{ display: "flex", width: "100%",height: '100%', gap: `${properties.gap}px`, flexDirection: 'row', alignItems: 'flex-start'}}>
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                        </div>
                    }
                    {type === SortType.BOTTOM &&
                        <div style={{ display: "flex", width: "100%", height: '100%',gap: `${properties.gap}px`, flexDirection: 'row', alignItems: 'flex-end'}}>
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                            <Box width={properties.width} height={properties.height} />
                        </div>
                    }
                    {type === SortType.STRETCH &&
                        <div style={{ display: "flex", width: "100%",height: '100%', gap: `${properties.gap}px`, flexDirection: 'row', alignItems: 'stretch'}}>
                            <Box width={properties.width} />
                            <Box width={properties.width} />
                            <Box width={properties.width} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
